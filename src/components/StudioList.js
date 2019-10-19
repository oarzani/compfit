import React from "react";
import styled from "styled-components";
import CardComponent from "./CardComponent";

const List = styled.section`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
`;

// Mapping happens in this file//
export default function StudioList({ studios }) {
  return (
    <List>
      {studios.map(studio => {
        return <CardComponent studio={studio} />;
      })}
    </List>
  );
}

// export default function LibraryContainer(children) {
//   return (
//     <>
//       {games.map((game, index) => {
//         return (
//           <ListContainerBorder game={game}>
//             <Game key={game.title} game={game} />
//           </ListContainerBorder>
//         );
//       })}

//       <UpdateNotification />
//     </>
