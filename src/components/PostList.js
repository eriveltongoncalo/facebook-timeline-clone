import React, { Component } from "react";
import Post from "./Post";
import Header from './Header';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://www.coolgenerator.com/Pic/Face//male/male1084806240662.jpg",
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a XXX está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Bruno Antunes",
              avatar: "https://www.coolgenerator.com/Pic/Face//male/male20171086722889709.jpg",
            },
            content: `Eles estão sempre contratando. Tenta mandar seu curriculo,
            vai que você consegue.`,
          },
          {
            id: 2,
            author: {
              name: "Erivelton Gonçalo",
              avatar: "https://www.coolgenerator.com/Pic/Face//male/male20171085985453674.jpg",
            },
            content: `O Felipe da XXX falou em um de seus videos para
            enviar o curriculo para novostalentos@xxx.com`,
          },
          {
            id: 3,
            author: {
              name: "Steve Evans",
              avatar: "https://www.coolgenerator.com/Pic/Face//male/male20161086272161072.jpg",
            },
            content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
            classical Latin literature from 45 BC, making it over 2000 years old.`,
          },
        ],
      },
      {
        id: 2,
        author: {
          name: "João",
          avatar: "https://www.coolgenerator.com/Pic/Face//male/male20161086666815551.jpg",
        },
        date: "05 Ago 2019",
        content: `O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500,
			quando uma misturou os caracteres de um texto para criar um espécime de livro.`,
        comments: [
          {
            id: 2,
            author: {
              name: "Sivio Fernandes",
              avatar: "https://www.coolgenerator.com/Pic/Face//male/male20161083900372070.jpg",
            },
            content: `O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.`,
          },
          {
            id: 3,
            author: {
              name: "Thomas Evans",
              avatar: "https://www.coolgenerator.com/Pic/Face//male/male1085217618561.jpg",
            },
            content: `O Diego da RocketSeat falou em um de seus videos para
            enviar o curriculo para novostalentos@rocketseat.com`,
          },
          {
            id: 4,
            author: {
              name: "Steve Evans",
              avatar: "https://www.coolgenerator.com/Pic/Face//male/male10858051008.jpg",
            },
            content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
            classical Latin literature from 45 BC, making it over 2000 years old.`,
          },
        ],
      },
    ],
  };

  render() {
    return (
      <>
      <Header />
      <div className="postList">
        {this.state.posts.map((post) => (
          <Post key={post.id} data={post} />
        ))}
      </div>
      </>
    );
  }
}

export default PostList;
