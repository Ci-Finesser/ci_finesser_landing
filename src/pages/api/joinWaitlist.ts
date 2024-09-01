// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import api_service from "@/lib/api_service";

type Resdata = {
  status: boolean;
  message: string;
  data?: any;
  errors?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    try {
      const response  = await api_service.post("/waitlist/join", req.body);
      res.status(200).json(response);
    } catch (error:any) {
      // console.error(error.response.data);
      res.status(500).json(error.response.data);
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
