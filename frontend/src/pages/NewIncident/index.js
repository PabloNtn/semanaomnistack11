import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api'

import './style.css';
import logoImg from '../../assets/logo.svg';

export default function NewIncident() {

    //----------------------------------variaveis---------------------------------//
    
    const [title, setTitulo] = useState('');
    const [description, setDescricao] = useState('');
    const [value, setValor] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    //-----------------------------------functions-------------------------------//
    
    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try {
            await api.post('incidents', data, {
                headers:{
                    Authorization: ongId
                }
            });

            history.push('/profile')
        } catch (err) {
            alert(`Ouve um erro: ${err}`)
        }
    };
    return (

        //------------------------------------HTML---------------------------------//
        
        <div className="newincident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                    Volta para home
                </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitulo(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição"
                        cols="47" rows="7"
                        value={description}
                        onChange={e => setDescricao(e.target.value)}
                    />
                    <input
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValor(e.target.value)}
                    />

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}