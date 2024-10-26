"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturedProperties from "./components/FeaturedProperties";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function WorkshopImobiliaria() {
  const [properties, setProperties] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      // In a real app, this would be an API call
      const data = [
        {
          id: 1,
          titulo: "Apartamento Moderno",
          descricao: "Um belo apartamento moderno no centro da cidade",
          localizacao: "Centro",
          preco: 250000,
          imagem: "src/assets/properties/1.webp",
          destaque: true,
        },
        {
          id: 2,
          titulo: "Vila na Praia",
          descricao: "Vila luxuosa com vista deslumbrante para o oceano",
          localizacao: "Área Costeira",
          preco: 750000,
          imagem: "src/assets/properties/2.webp",
          destaque: true,
        },
        {
          id: 3,
          titulo: "Casa de Campo",
          descricao: "Espaçosa casa familiar com um grande quintal",
          localizacao: "Interior",
          preco: 450000,
          imagem: "src/assets/properties/3.webp",
          destaque: false,
        },
      ];
      setProperties(data);
      setSearchResults(data);
    };

    const fetchTestimonials = async () => {
      // In a real app, this would be an API call
      const data = [
        {
          id: 1,
          nome: "João Silva",
          comentario:
            "Encontrei a casa dos meus sonhos graças à ImobiliáriaReact!",
        },
        {
          id: 2,
          nome: "Maria Santos",
          comentario: "A melhor plataforma imobiliária que já usei.",
        },
        {
          id: 3,
          nome: "Carlos Oliveira",
          comentario: "Incrível seleção de propriedades e fácil de usar.",
        },
      ];
      setTestimonials(data);
    };

    fetchProperties();
    fetchTestimonials();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProperties properties={searchResults} />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
