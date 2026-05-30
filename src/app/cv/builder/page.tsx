import { CVBuilderPage } from "@/components/cv-studio/CVStudio";

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{ template?: string }>;
}) {
  const params = searchParams ? await searchParams : {};
  const template =
    typeof params?.template === "string" ? params.template : "yellow-black";

  return <CVBuilderPage initialTemplate={template} />;
}
