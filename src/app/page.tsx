"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import useSWR from "swr";
import productsState from "../app/states/sampleState"; // Assume you've defined this atom
import React from "react";

export default function Home() {
	const { data: products, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetch);
	const [recoilproducts, setRecoilproducts] = useRecoilState(productsState);

	useEffect(() => {
		if (products) {
			products.json().then((data) => {
				setRecoilproducts(data);
			});
		}
	}, [products, setRecoilproducts]);

	if (error) return <div>failed to load</div>;
	if (isLoading) return <div>loading...</div>;

	console.log(recoilproducts);

	return (
		<div>
			<h1 className="text-slate-800">ReactPress</h1>
			<Link href="/rp-admin">Demo the admin panel</Link>
			<hr />
			<h2>Testing SWR and Recoil</h2>
			{recoilproducts?.slice(0, 10).map((product: { id: number; title: string; body: string }) => (
				<div key={product.id}>
					<h3>{product.title}</h3>
					<p>{product.body}</p>
				</div>
			))}
		</div>
	);
}
