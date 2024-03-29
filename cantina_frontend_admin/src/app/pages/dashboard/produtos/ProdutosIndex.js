import React from "react";
import Layout from "../../../../layout/Layout";
import BetterDataTable from "../../../components/BetterDataTable";
import { Column } from 'primereact/column';
import { getDataTable, remove } from "../../../crud/produto.crud";

export default function ProdutosIndex() {
	return (
		<Layout title={'Produtos'}>
			<BetterDataTable btnTitle="produto" fetchEvent={getDataTable} crudButtons={true} crudUrl={"/produtos"} idRow={`id`} deleteHandler={remove} noShow>
				<Column field="id" header="ID" />
				<Column field="pro_name" header="Nome" />
				<Column field="pro_description" header="Descrição" />
				<Column field="created_at_format" header="Criado em" />
				<Column field="updated_at_format" header="Atualizado em" />
			</BetterDataTable>
		</Layout>
	)
};