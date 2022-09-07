import React from "react";

const expression = () => {
  return (
    <>
      Drag the moon to its orbit and observe the positions of moon.
    </>
  );
};

const Instruction_1 = () => {
  return <div>Click on "Next" button.</div>;
};

const Instruction_2 = () => {
  return (
    <ul>
      <li> Drag the moon to see the effect of full moon on earth.</li>
     
    </ul>
  );
};

const Instruction_3 = () => {
  return (
    <ul>
      <li>
      Drag the moon to see the effect of last quarter moon on earth.
      </li>
    </ul>
  );
};

const Instruction_4 = () => {
  return (
    <ul>
      <li>
      Drag the moon to see the effect of new moon on earth.
      </li>
    </ul>
  );
};

const Instruction_5 = () => {
  return (
    <ul>
      <li>Drag the moon to see the effect of first quarter moon on earth.</li>
    </ul>
  );
};

const Instruction_6 = () => {
  return (
    <ul>
      <li>Click on "Next" button .</li>
    </ul>
  );
};

const Instruction_7 = () => {
  return (
    <ul>
      <li>Click on "Next" button to see conclusion .</li>
    </ul>
  );
};

export default expression;

export {
  Instruction_1,
  Instruction_2,
  Instruction_3,
  Instruction_4,
  Instruction_5,
  Instruction_6,
  Instruction_7
};
