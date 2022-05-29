import React from 'react';
import EffectHooks from '../../ChitSeatTutorial/BasicSideEffect/EffectHooks';
import MultipleEffect from '../../ChitSeatTutorial/BasicSideEffect/MultipleEffect';
import SkippingEffect from '../../ChitSeatTutorial/BasicSideEffect/SkippingEffect';
import WithoutArray from '../../ChitSeatTutorial/BasicSideEffect/SkippingEffect/WithoutArray';
import Display from '../../ChitSeatTutorial/ContextApi/ButtonHooks/Display';
import HomeCountState from '../../ChitSeatTutorial/HomeCountState';
import InitialState from '../../ChitSeatTutorial/InitialState';
import Objects from '../../ChitSeatTutorial/ObjectVariable/Objects';
import PlusMinus from '../../ChitSeatTutorial/PlusMinus';
import ArrayDip from '../../ChitSeatTutorial/UseLayoutEffect/ArrayDip';
import TableAdmin from '../TableAdmin';

const Home = () => {
  return (
    <div>
      <TableAdmin />
      <div>

        <HomeCountState />
      </div>
      <div>
        <div>
          <Objects />
        </div>
        <div>
          <InitialState />
        </div>


        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <PlusMinus />
          </div>
          <div>
            <EffectHooks />
          </div>
          <div>
            <MultipleEffect />
          </div>

          <div>
            <SkippingEffect />
          </div>

        </div>
        <hr />
        <div style={{ display: "flex", justifyContent: "space-between"}} >
          <div>
            <WithoutArray />
          </div>
          <div>
            <Display />
          </div>
          <div>
            <ArrayDip />
          </div>
          <hr />
        </div>

      </div>
    </div>
  );
};

export default Home;