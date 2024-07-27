import { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { bg1, bg2, bg3 } from "@/constants/images";
import Slides from "./slides";

export default function Slideshow() {
  const t = useTranslations("slideshow");

  const items = [
    {
      title: t.rich("slide1.title", {
        span: (chunks: ReactNode) => (
          <span className="text-light-primary">{chunks}</span>
        ),
      }),
      description: t("slide1.description"),
      bg: bg1,
      more: t("more"),
    },
    {
      title: t.rich("slide2.title", {
        span: (chunks: ReactNode) => (
          <span className="text-light-primary">{chunks}</span>
        ),
        br: () => <br />,
      }),
      description: t("slide2.description"),
      bg: bg2,
      more: t("more"),
    },
    {
      title: t.rich("slide3.title", {
        span: (chunks: ReactNode) => (
          <span className="text-light-primary">{chunks}</span>
        ),
        br: () => <br />,
      }),
      description: t("slide3.description"),
      bg: bg3,
      more: t("more"),
    },
  ];

  return (
    <>
      <Slides items={items} />
    </>
  );
}
