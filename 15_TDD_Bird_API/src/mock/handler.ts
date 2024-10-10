// src/mocks/handlers.js
import { http, HttpResponse } from "msw";
import { birds } from "../data/birds";

export const handlers = [
  http.get("https://stefanscoolevogelapi.com/api/birds", () => {
    return HttpResponse.json(birds);
  }),
];
