import React, { useState, useEffect } from "react";
import "./InserirProduto.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory, useParams } from "react-router";

/* Função que permite editar os dados de um produto já existente */

export default function EditarProduto() {
  let { id } = useParams();
  const [produto, setProduto] = useState({});
  let history = useHistory();

  // esta função obtém o id e os dados do produto
  useEffect(() => {
    axios.get(`http://localhost:3001/byId/${id}`).then((response) => {
      setProduto(response.data);
    });
  });

  const initialValues = {
    nome: produto.nome,
    preco: produto.preco,
    fotografia: produto.fotografia,
    detalhes: produto.detalhes,
    stock: produto.stock,
    marca: produto.marca,
  };

  // nesta variável são feitas as demais validações
  // utilizando o Yup
  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Preenchimento Obrigatório!"),
    preco: Yup.number()
      .test(
        "maxDigitsAfterDecimal",
        "É necessário um número com até 2 casas decimais!",
        (preco) => /^\d+(\.\d{1,2})?$/.test(preco)
      )
      .required("Preenchimento Obrigatório!"),
    fotografia: Yup.string().required("Preenchimento Obrigatório!"),
    detalhes: Yup.string(),
    stock: Yup.boolean().required().default(false),
    marca: Yup.string().required("Preenchimento Obrigatório!"),
  });

  // este onSubmit vai alterar os dados dos campos preenchidos do produto selecionado na base de dados
  const onSubmit = (dados) => {
    axios.put(`http://localhost:3001/byId/${id}`, dados).then((response) => {});
  };

  return (
    <div>
      <div className="container_post">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          enableReinitialize={true}
        >
          <Form className="formulario">
            <label id="head">Nome :</label>
            <Field
              autoComplete="off"
              id="input"
              name="nome"
              placeholder="(Ex: I7-10700K)"
            />
            <ErrorMessage name="nome" component="p" />
            <label id="head">Preço :</label>
            <Field
              autoComplete="off"
              id="input"
              name="preco"
              placeholder="(Ex: 250.00)"
            />
            <ErrorMessage name="preco" component="p" />
            <label id="head">Fotografia :</label>
            <Field
              autoComplete="off"
              id="input"
              name="fotografia"
              placeholder="(Ex: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Exemplo.svg/989px-Exemplo.svg.png)"
            />
            <ErrorMessage name="fotografia" component="p" />
            <label id="head">Detalhes :</label>
            <Field
              autoComplete="off"
              id="input"
              name="detalhes"
              placeholder="(Ex: Este produto é caraterístico...)"
            />
            <ErrorMessage name="detalhes" component="p" />
            <label id="head">Produto em Stock :</label>
            <Field
              autoComplete="off"
              id="input"
              name="stock"
              placeholder="(Este produto está em stock? 1(Sim) ou 0(Não)?)"
            />
            <ErrorMessage name="stock" component="p" />
            <label id="head">Marca :</label>
            <Field
              autoComplete="off"
              id="input"
              name="marca"
              placeholder="(Ex: Intel® Core™)"
            />
            <ErrorMessage name="marca" component="p" />
            <button
              type="submit"
              id="bt"
              className="btn btn-primary"
              onClick={onSubmit}
            >
              Guardar Alterações
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
