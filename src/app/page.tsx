import { Hero } from "@/components/sections/Hero";
import { Credenciais } from "@/components/sections/Credenciais";
import { QuemSomos } from "@/components/sections/QuemSomos";
import { Atuacao } from "@/components/sections/Atuacao";
import { Historia } from "@/components/sections/Historia";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { Ajudar } from "@/components/sections/Ajudar";
import { Transparencia } from "@/components/sections/Transparencia";
import { Parceiros } from "@/components/sections/Parceiros";
import { Contato } from "@/components/sections/Contato";

export default function Home() {
  return (
    <>
      <Hero />
      <Credenciais />
      <QuemSomos />
      <Atuacao />
      <Historia />
      <Depoimentos />
      <Ajudar />
      <Transparencia />
      <Parceiros />
      <Contato />
    </>
  );
}
