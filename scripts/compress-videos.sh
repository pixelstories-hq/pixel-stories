#!/usr/bin/env bash
#
# Converts video files in src/content/ to compressed mp4 format.
# Requires: ffmpeg (brew install ffmpeg)
#
# Usage:
#   ./scripts/compress-videos.sh          # convert all videos
#   ./scripts/compress-videos.sh --dry-run # preview what would be converted

set -euo pipefail

CONTENT_DIRS=("src/content" "src/assets")
VIDEO_EXTENSIONS=("mov" "avi" "mkv" "wmv" "flv" "webm")
DRY_RUN=false

if [[ "${1:-}" == "--dry-run" ]]; then
  DRY_RUN=true
fi

if ! command -v ffmpeg &>/dev/null; then
  echo "Error: ffmpeg is not installed. Install with: brew install ffmpeg"
  exit 1
fi

# Build the find pattern for video extensions
find_args=()
for i in "${!VIDEO_EXTENSIONS[@]}"; do
  if [[ $i -gt 0 ]]; then
    find_args+=("-o")
  fi
  find_args+=("-iname" "*.${VIDEO_EXTENSIONS[$i]}")
done

convert_file() {
  local file="$1"
  local dir basename name output input_size output_size
  dir=$(dirname "$file")
  basename=$(basename "$file")
  name="${basename%.*}"
  output="${dir}/${name}.mp4"

  # Skip if webm already exists and is newer than the source
  if [[ -f "$output" && "$output" -nt "$file" ]]; then
    echo "SKIP (up-to-date): $output"
    return 1
  fi

  echo "CONVERTING: $file -> $output"

  ffmpeg -i "$file" \
    -c:v libx264 \
    -crf 30 \
    -preset veryslow \
    -vf "scale='min(1920,iw)':'-2':flags=lanczos" \
    -pix_fmt yuv420p \
    -movflags +faststart \
    -an \
    -y \
    "$output" 2>/dev/null

  input_size=$(du -sh "$file" | cut -f1)
  output_size=$(du -sh "$output" | cut -f1)
  echo "  Done: $file $input_size -> $output_size"
}

export -f convert_file

files=()
while IFS= read -r file; do
  files+=("$file")
done < <(find "${CONTENT_DIRS[@]}" -type f \( "${find_args[@]}" \))

if [[ ${#files[@]} -eq 0 ]]; then
  echo "No video files found in ${CONTENT_DIRS[*]}"
  exit 0
fi

if $DRY_RUN; then
  for file in "${files[@]}"; do
    dir=$(dirname "$file")
    name="$(basename "${file%.*}")"
    output="${dir}/${name}.mp4"
    if [[ -f "$output" && "$output" -nt "$file" ]]; then
      echo "SKIP (up-to-date): $output"
    else
      input_size=$(du -sh "$file" | cut -f1)
      echo "WOULD CONVERT: $file ($input_size) -> $output"
    fi
  done
  echo ""
  echo "Dry run complete. ${#files[@]} file(s) found."
  exit 0
fi

# Run conversions in parallel
printf '%s\n' "${files[@]}" | xargs -P 0 -I {} bash -c 'convert_file "$@"' _ {}

echo ""
echo "Done. ${#files[@]} file(s) processed."
