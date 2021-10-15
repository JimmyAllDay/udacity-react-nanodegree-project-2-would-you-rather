import React from "react";
import LeaderboardUser from "./LeaderboardUser";

function Leaderboard(props) {
  const users = [...props.users];
  const sortedUsers = users.sort((a, b) => {
    return b.totalPoints - a.totalPoints;
  });

  console.log(sortedUsers);

  const mapRankings = sortedUsers.map((user) => {
    return (
      <LeaderboardUser
        key={user.id}
        name={`${user.firstName} ${user.lastName}`}
        id={user.id}
        avatar={user.avatar}
        questionsAsked={user.questionsAsked}
        questionsAnswered={user.questionsAnswered}
      />
    );
  });

  return (
    <div className="w-75 mt-2 d-flex flex-column">
      <div className="d-flex justify-content-center w-100">
        <div className="w-100 border">
          <h5>Leader Board</h5>
        </div>
      </div>
      <div className="w-100 border p-2 d-flex flex-column">{mapRankings}</div>
    </div>
  );
}

export default Leaderboard;
