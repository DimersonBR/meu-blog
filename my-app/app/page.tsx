"use client";
import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

// Dados dos posts (mockados- ficticios)
const posts = [
  {
    slug: 'viagem-a-italia',
    titulo: 'Minha Viagem à Itália',
    conteudo: 'Recentemente, fiz uma viagem incrível à Itália. Aqui estão algumas das minhas experiências e dicas para quem pretende visitar...',
    imagem: '/images/viagem-italia.png',
    url: 'https://malaecuia.com.br/blog/viagem-para-italia-dicas-para-desbravar-este-pais/',
  },
  {
    slug: 'cozinhando-com-amor',
    titulo: 'Cozinhando com Amor',
    conteudo: 'Nada melhor do que preparar uma refeição deliciosa para quem amamos. Neste post, compartilho algumas receitas especiais...',
    imagem: '/images/receitas.webp',
    url: 'https://cozinhaporamor.com.br/',
  },
  {
    slug: 'tecnologia-que-transforma',
    titulo: 'Tecnologia que Transforma',
    conteudo: 'A tecnologia está mudando o mundo de maneiras surpreendentes. Vamos explorar algumas inovações que estão transformando nossa vida...',
    imagem: '/images/tecnologia.webp',
    url: 'https://veja.abril.com.br/tecnologia/a-tecnologia-transforma',
  },
  {
    slug: 'dicas-de-saude',
    titulo: 'Dicas de Saúde e Bem-Estar',
    conteudo: 'Cuidar da saúde é essencial. Aqui estão algumas dicas simples e eficazes para manter o bem-estar no dia a dia...',
    imagem: '/images/dica-saude.jpg',
    url: 'https://bvsms.saude.gov.br/qualidade-de-vida-em-cinco-passos/#:~:text=Adote%20h%C3%A1bitos%20saud%C3%A1veis%3A%20alimente%2Dse,encarando%2Dos%20positivamente%3B%20administre%20seu',
  },
  {
    slug: 'arte-e-cultura',
    titulo: 'Explorando Arte e Cultura',
    conteudo: 'A arte e a cultura enriquecem nossas vidas de diversas maneiras. Descubra algumas exposições e eventos culturais imperdíveis...',
    imagem: '/images/arte-cultura.png',
    url: 'https://www.maisconhecer.com/humanidade/5854/Explorando-a-cultura,-a-identidade-e-as-artes-para-aprimorar-o-ensino-de-graduacao',
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <a href={post.url} target="_blank" rel="noopener noreferrer" key={post.slug} className={styles.postLink}>
          <div className={styles.post}>
            <Image src={post.imagem} alt={post.titulo} width={200} height={150} className={styles.image} />
            <div className={styles.content}>
              <h2 className={styles.title}>{post.titulo}</h2>
              <p>{post.conteudo.substring(0, 100)}...</p>
            </div>
          </div>
        </a>
      ))}
    </div>      
  );
}
