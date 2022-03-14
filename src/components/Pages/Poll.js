import React from "react";

// import { Link } from "react-router-dom";

import CardHeader from "../CardComponents/CardHeader";
import WouldYouText from "../CardComponents/WouldYouText";
import PollAnswers from "../CardComponents/PollAnswers";
import CardLikes from "../CardComponents/CardLikes";

import { useParams } from "react-router-dom";

import { Container } from "react-bootstrap";

function Poll(props) {
  const { id } = useParams();
  const { questions, user } = props;
  const userId = user.id;
  const data = questions.filter((question) => question.key === id)[0];
  const answersArray = data.answers;

  return (
    <Container className="p-0 bg-dark text-light">
      <CardHeader
        avatar={data.avatar}
        name={data.asker}
        text={"Asked:"}
        subComp={
          <CardLikes
            likes={data.likes}
            userId={userId}
            askerId={data.askerId}
            questionId={id}
          />
        }
      />

      <WouldYouText />

      <PollAnswers data={data} answersArray={answersArray} userId={userId} />
    </Container>
  );
}

export default Poll;
