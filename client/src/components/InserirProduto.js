import React, { useState } from "react";
import "./InserirProduto.css";
import HeaderInsert from "./HeaderInsert";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Popup from "./popup/Popup";
import * as Yup from "yup";
import axios from "axios";

/* Função que permite adicionar novos produtos à base de dados
   Nesta função é utilizado o Formik juntamente com o Yup de modo
   a conseguir criar um fornulário que imponha algumas restrições ao utilizador */

export default function InserirProduto() {
  // variáveis para abrir e fechar o popup
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const initialValues = {
    nome: "",
    preco: "",
    fotografia: "",
    detalhes: "",
    stock: "",
    marca: "",
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

  // este onSubmit vai enviar os dados dos campos preenchidos para a base de dados
  // e vai apresentar na consola e até mesmo no Layout uma mensagem de sucesso
  const onSubmit = (dados) => {
    axios.post("http://localhost:3001/", dados).then((response) => {
      console.log("Sucesso");
    });
    togglePopup();
  };

  return (
    <div>
      <HeaderInsert />
      <div className="container_post">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="formulario">
            <label id="head">Nome :</label>
            <Field
              autocomplete="off"
              id="input"
              name="nome"
              placeholder="(Ex: I7-10700K)"
            />
            <ErrorMessage name="nome" component="p" />
            <label id="head">Preço :</label>
            <Field
              autocomplete="off"
              id="input"
              name="preco"
              placeholder="(Ex: 250.00)"
            />
            <ErrorMessage name="preco" component="p" />
            <label id="head">Fotografia :</label>
            <Field
              autocomplete="off"
              id="input"
              name="fotografia"
              placeholder="(Ex: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Exemplo.svg/989px-Exemplo.svg.png)"
            />
            <ErrorMessage name="fotografia" component="p" />
            <label id="head">Detalhes :</label>
            <Field
              autocomplete="off"
              id="input"
              name="detalhes"
              placeholder="(Ex: Este produto é caraterístico...)"
            />
            <ErrorMessage name="detalhes" component="p" />
            <label id="head">Produto em Stock :</label>
            <Field
              autocomplete="off"
              id="input"
              name="stock"
              placeholder="(Este produto está em stock? 1(Sim) ou 0(Não)?)"
            />
            <ErrorMessage name="stock" component="p" />
            <label id="head">Marca :</label>
            <Field
              autocomplete="off"
              id="input"
              name="marca"
              placeholder="(Ex: Intel® Core™)"
            />
            <ErrorMessage name="marca" component="p" />
            <button type="submit" id="bt" className="btn btn-primary">
              Inserir Produto
            </button>
            <div>
              {isOpen && (
                <Popup
                  content={
                    <>
                      <b className="popup">INSERIDO COM SUCESSO!</b>
                    </>
                  }
                  handleClose={togglePopup}
                />
              )}
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
