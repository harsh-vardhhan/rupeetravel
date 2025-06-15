"use client";

import styles from "../../styles/Home.module.css";
import {
  Card,
  CardBody,
  Stack,
  Divider,
  CardFooter,
  Button,
  SimpleGrid,
  Heading,
  Step,
  StepDescription,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Box,
} from "@chakra-ui/react";
import Header from "../../component/header";
import StructuredData from "../../component/structuredData";
import Seo from "../../component/seo";

// Define the steps data directly in the component since it's static
const steps = [
  {
    title: `Apply for Vietnam E-Visa`,
    description:
      "fill the online form from the official site link given below.",
  },
  {
    title: `Pay the fee`,
    description: "Pay the $25 online non-refundable fee",
  },
  {
    title: `Wait for E-Visa approval`,
    description:
      "Wait for 3-5 business days. You will get status update on your email",
  },
];

export default function Home() {
  const structuredData = {
    "@context": "https://www.schema.org",
    "@type": "product",
    brand: "Vietnam E-visa",
    name: "Vietnam E-visa application",
    image: "https://ik.imagekit.io/rupeetravel/local-currency.webp",
    category: "E-visa",
    description: " Vietnam E-visa application",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "1",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "2100",
      itemCondition: "http://schema.org/UsedCondition",
      availability: "http://schema.org/InStock",
      seller: {
        "@type": "Vietnam Immigration",
        name: "Vietnam E-visa",
      },
    },
  };

  // Since this is a server component, we set activeStep to 0 (or any default value)
  // If you need interactive step functionality, you'll need a separate client component
  const activeStep = 0;

  return (
    <>
      <StructuredData data={structuredData} />
      <Seo
        title="Rupee Travel | Apply for Vietnam e-visa"
        description="Vietnam e-visa application. Vietnam visa for Indians."
        canonical={"https://www.rupeetravel.com/e-visa-vietnam-indians"}
      />
      <main className={styles.main}>
        <Header title={"Apply E-Visa for Vietnam"} />
        <div style={{ marginTop: "20px" }}>
          <SimpleGrid minChildWidth="350px" spacing="40px">
            <Card maxW="sm">
              <CardBody>
                <Stack mt="6" spacing="3">
                  <Heading as="h2" size="md">
                    E-Visa for Vietnam
                  </Heading>

                  <Stepper
                    index={activeStep}
                    orientation="vertical"
                    height="400px"
                    gap="0"
                  >
                    {steps.map((step, index) => (
                      <Step key={index}>
                        <StepIndicator>
                          <StepStatus
                            active={<StepNumber />}
                            incomplete={<StepNumber />}
                            complete={<StepNumber />}
                          />
                        </StepIndicator>

                        <Box flexShrink="1">
                          <StepTitle>{step.title}</StepTitle>
                          <StepDescription>{step.description}</StepDescription>
                        </Box>

                        <StepSeparator />
                      </Step>
                    ))}
                  </Stepper>
                </Stack>
              </CardBody>
              <Divider style={{ color: "#e2e8f0" }} />
              <CardFooter>
                <a href="https://evisa.xuatnhapcanh.gov.vn/web/guest/khai-thi-thuc-dien-tu/cap-thi-thuc-dien-tu">
                  <Button colorScheme="green">Apply E-Visa</Button>
                </a>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </div>
      </main>
    </>
  );
}
