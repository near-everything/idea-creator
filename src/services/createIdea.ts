import { request } from "near-social-bridge";

interface CreateIdeaResponse {
  error?: string;
  success?: boolean;
}

interface CreateIdeaPayload {
  title: string,
  description: string
}

const createIdea = (payload: CreateIdeaPayload) => {
  return request<CreateIdeaResponse>("create-thing", payload);
};
export default createIdea;
