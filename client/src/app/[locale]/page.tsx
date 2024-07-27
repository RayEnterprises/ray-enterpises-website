import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/navbar/navbar";
import Slideshow from "@/components/slideshow/slideshow";
import { Container, Grid, Paper } from "@mui/material";
import Image from "next/image";
import Footer from "@/components/footer/footer";
import {
  mission,
  digital,
  referal,
  leads,
  design,
  development,
  consultant,
  importations,
  exchange,
} from "@/constants/images";
import VideoCarousel from "@/components/videocarousel/videoCarousel";
import Testimonials from "@/components/testimonials/testimonials";
import Contact from "@/components/contact/contact";

interface LocaleProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({
  params: { locale },
}: Readonly<LocaleProps>) {
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: "Ray Enterprises",
    description: t("description"),
  };
}

export default function Index() {
  const t = useTranslations("HomePage");
  const id = useTranslations("Navigation");
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <Navbar />

          <div className="mt-[50px]">
            <Slideshow />
          </div>

          <div id={id("slug.about")} className="mt-20">
            <Container>
              <h2 className="text-center text-light-primary text-[24px]">
                {t("about.title")}
              </h2>
              <p className="text-center mt-1">{t("about.description")}</p>

              <Grid container spacing={4} className="pt-8">
                <Grid
                  item
                  xs={12}
                  md={6}
                  className="flex items-center justify-center md:justify-start"
                >
                  <div>
                    <h3 className="font-bold">{t("about.subtitle")}</h3>
                    <p>{t("about.pitch")}</p>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Image src={mission} width={457} height={307} alt="People" />
                </Grid>
              </Grid>
            </Container>
          </div>

          <div id={id("slug.services")} className="mt-20">
            <Container>
              <h2 className="text-center text-light-primary text-[24px]">
                {t("services.title")}
              </h2>
              <p className="text-center">{t("services.description")}</p>
              <Grid
                container
                spacing={4}
                justifyContent="center"
                className="mt-1"
              >
                <Grid item xs={12} sm={6} md={3} className="text-center">
                  <Paper
                    elevation={3}
                    className="p-4"
                    style={{ height: "100%" }}
                  >
                    <div className="flex flex-col items-center h-full">
                      <Image
                        alt={t("services.digital")}
                        src={digital}
                        width={100}
                        height={100}
                        className="mb-2"
                      />
                      <h6>{t("services.digital")}</h6>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className="text-center">
                  <Paper
                    elevation={3}
                    className="p-4"
                    style={{ height: "100%" }}
                  >
                    <div className="flex flex-col items-center h-full">
                      <Image
                        alt={t("services.referal")}
                        src={referal}
                        width={100}
                        height={100}
                        className="mb-2"
                      />
                      <h6>{t("services.referal")}</h6>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className="text-center">
                  <Paper
                    elevation={3}
                    className="p-4"
                    style={{ height: "100%" }}
                  >
                    <div className="flex flex-col items-center h-full">
                      <Image
                        alt={t("services.leads")}
                        src={leads}
                        width={100}
                        height={100}
                        className="mb-2"
                      />
                      <h6>{t("services.leads")}</h6>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className="text-center">
                  <Paper
                    elevation={3}
                    className="p-4"
                    style={{ height: "100%" }}
                  >
                    <div className="flex flex-col items-center h-full">
                      <Image
                        alt={t("services.design")}
                        src={design}
                        width={100}
                        height={100}
                        className="mb-2"
                      />
                      <h6>{t("services.design")}</h6>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className="text-center">
                  <Paper
                    elevation={3}
                    className="p-4"
                    style={{ height: "100%" }}
                  >
                    <div className="flex flex-col items-center h-full">
                      <Image
                        alt={t("services.development")}
                        src={development}
                        width={100}
                        height={100}
                        className="mb-2"
                      />
                      <h6>{t("services.development")}</h6>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className="text-center">
                  <Paper
                    elevation={3}
                    className="p-4"
                    style={{ height: "100%" }}
                  >
                    <div className="flex flex-col items-center h-full">
                      <Image
                        alt={t("services.consultant")}
                        src={consultant}
                        width={100}
                        height={100}
                        className="mb-2"
                      />
                      <h6>{t("services.consultant")}</h6>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className="text-center">
                  <Paper
                    elevation={3}
                    className="p-4"
                    style={{ height: "100%" }}
                  >
                    <div className="flex flex-col items-center h-full">
                      <Image
                        alt={t("services.exchange")}
                        src={exchange}
                        width={100}
                        height={100}
                        className="mb-2"
                      />
                      <h6>{t("services.exchange")}</h6>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className="text-center">
                  <Paper
                    elevation={3}
                    className="p-4"
                    style={{ height: "100%" }}
                  >
                    <div className="flex flex-col items-center h-full">
                      <Image
                        alt={t("services.importations")}
                        src={importations}
                        width={100}
                        height={100}
                        className="mb-2"
                      />
                      <h6>{t("services.importations")}</h6>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </div>

          <div className="mt-20 bg-greenbg bg-cover bg-center pt-6 pb-6">
            <VideoCarousel />
          </div>

          <div className="mt-20">
            <Testimonials />
          </div>

          <div className="mt-20 pb-20" id={id("slug.contact")}>
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
