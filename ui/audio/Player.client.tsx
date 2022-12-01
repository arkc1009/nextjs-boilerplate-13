"use client";

const Player: React.FC = () => {
  return (
    <div>
      <h3>Audio Player</h3>
      <audio controls>
        <source src="/files/file_example_MP3_5MG.mp3" type="audio/mpeg" />
        DO NOT USE EXPLORER
      </audio>
    </div>
  );
};

export default Player;
