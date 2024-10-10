"use client";
import Link from 'next/link';
import Image from 'next/image';

// Dados dos posts (mockados- ficticios)
const posts = [
  {
    slug: 'meu-primeiro-post',
    titulo: 'Meu Primeiro Post',
    conteudo: 'Este é o conteúdo do meu primeiro post. Está bem mais ou menos, mais ou menos...',
    imagem: '/images/img_temp.jpg',
  },
  {
    slug: 'aprendendo-nextjs',
    titulo: 'Aprendendo Next.js',
    conteudo: 'Next.js é um framework React incrível! Aqui estão algumas coisas para vocês lerem sobre ele...',
    imagem: '/images/img_temp.jpg',
  },
];

export default function Home() {
  return (
    <div>
      {posts.map((post) => (
        <Link href={`/${post.slug}`} key={post.slug}>
          <div>
            <h2>{post.titulo}</h2>
            <Image src={post.imagem} alt={post.titulo} width={200} height={150} />
            <p>{post.conteudo.substring(0, 100)}...</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
