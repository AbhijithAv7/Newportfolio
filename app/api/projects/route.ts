import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const projects = await prisma.project.findMany();
  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  const body = await req.json();

  const project = await prisma.project.create({
    data: {
      title: body.title,
      desc: body.desc,
      status: body.status,
      featured: body.featured,
      tags: body.tags,
      github: body.github,
      demo: body.demo,
      docs: body.docs,
    },
  });

  return NextResponse.json(project);
}
