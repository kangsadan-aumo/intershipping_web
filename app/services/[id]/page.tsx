import { servicesData } from "@/data/services";
import ServiceDetailClient from "./ServiceDetailClient";
import { notFound } from "next/navigation";

// Tell Next.js to pre-compile all service pages as static HTML at build time for HostAtom!
export function generateStaticParams() {
  return servicesData.map((service) => ({
    id: service.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }> | { id: string };
}

export default async function Page({ params }: PageProps) {
  // Safe resolved params to support sync or async context in all Next.js versions
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
