"use client";
import styles from "../../styles/Home.module.css";
import { SimpleGrid } from "@chakra-ui/react";
import Header from "../../component/header";
import { Tweet } from "react-tweet";
import Seo from "../../component/seo";

export default function Home() {
  return (
    <>
      <Seo
        title="Rupee Travel | Da Nang Vietnam hotel beach experiences"
        description="a Nang Vietnam hotel beach experiences"
        canonical={"https://www.rupeetravel.com/da-nang-vietnam-experiences"}
      />
      <main className={styles.main}>
        <Header title={"Budget experiences of Da Nang, Vietnam"} />
        <div style={{ marginTop: "20px" }}>
          <SimpleGrid minChildWidth="350px" spacing="40px">
            <Tweet id="1730045655782142016" />
            <Tweet id="1728960410685210905" />
          </SimpleGrid>
          <SimpleGrid minChildWidth="350px" spacing="40px">
            <Tweet id="1729377013121863722" />
            <Tweet id="1737152380578509304" />
          </SimpleGrid>
          <SimpleGrid minChildWidth="350px" spacing="40px">
            <Tweet id="1732289146855866432" />
            <Tweet id="1729421913003618655" />
          </SimpleGrid>
          <SimpleGrid minChildWidth="350px" spacing="40px">
            <Tweet id="1730166249802629205" />
            <Tweet id="1733011468139032687" />
          </SimpleGrid>
          <SimpleGrid minChildWidth="350px" spacing="40px">
            <Tweet id="1729812022026502559" />
          </SimpleGrid>
        </div>
      </main>
    </>
  );
}
