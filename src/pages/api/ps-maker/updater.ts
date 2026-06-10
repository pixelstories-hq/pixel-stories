import type { APIRoute } from "astro";
import { handlePsMakerUpdaterRequest } from "../../../lib/ps-maker-updater";

export const GET: APIRoute = async (context) =>
  handlePsMakerUpdaterRequest(context);

export const HEAD: APIRoute = async (context) =>
  handlePsMakerUpdaterRequest(context);
