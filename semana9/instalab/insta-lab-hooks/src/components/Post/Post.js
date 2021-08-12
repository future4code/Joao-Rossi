import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {

  // Verificador de curtidas:
  const [verificarCurtida, setVerificarCurtida] = useState (false);
  // Número de Curtidas:
  const [numeroCurtidas, setNumeroCurtidas] = useState (0);

  // Lista de Comentários:
  const [listaComentarios, setListaComentarios] = useState ([ ]);
  // Envio de Comentários:
  const [enviarComentarios , setEnviarComentarios] = useState (false);
  // Número de Comentários:
  const [numeroComentarios , setNumeroComentarios] = useState (0);

  const onClickCurtida = () => {
    if (verificarCurtida) {
       setVerificarCurtida(false);
       setNumeroCurtidas(numeroCurtidas - 1);
    } else {
      setVerificarCurtida(true);
      setNumeroCurtidas(numeroCurtidas + 1);
    }
  };

  const iconeCurtida = verificarCurtida ? iconeCoracaoPreto : iconeCoracaoBranco;


  const secaoComentarios = enviarComentarios ? (
    <SecaoComentario enviarComentario={enviarComentario} />
  ) : (
    secaoComentarios.map((comentario) => {
      return (
        <CommentContainer>
          <p>{comentario}</p>
        </CommentContainer>
      );
    })
  );

  const onClickComentario = () => {
    setEnviarComentarios(!enviarComentarios);
  };

  const enviarComentario = (comentario) => {
    setNumeroComentarios(numeroComentarios + 1);
    const novaListaDeComentarios = [...secaoComentario, comentario];
    setEnviarComentarios(false);
    setListaComentarios(novaListaDeComentarios);
  }

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {secaoComentario}
    </PostContainer>
  )
}

export default Post