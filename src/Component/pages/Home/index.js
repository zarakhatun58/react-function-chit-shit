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
import BarSize from '../../ChitSeatTutorial/UseReducer/BarSize';
import ImitateSetState from '../../ChitSeatTutorial/setState/ImitateSetState';
import CallBack from '../../ChitSeatTutorial/UseCallback/CallBack';
import WorkOfUseRef from '../../ChitSeatTutorial/UseRef/WorkOfUseRef';
import HoldStringValue from '../../ChitSeatTutorial/UseRef/HoldStringValue';
import TimerWithRefId from '../../ChitSeatTutorial/UseRef/TimerWithRefId';
import FetchData from '../../ChitSeatTutorial/SetIntervalDataFetch/FetchData';

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
        <div style={{ display: "flex", justifyContent: "space-between" }} >
          <div>
            <WithoutArray />
          </div>
          <div>
            <Display />
          </div>
          <div>
            <ArrayDip />
          </div>
          <div>
            <BarSize />
          </div>
          <hr />
          <div>
            <ImitateSetState />
          </div>

        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <CallBack />
          </div>
          <div>
            <WorkOfUseRef/>
          </div>
          <div>
            <HoldStringValue/>
          </div>
          <div>
            <TimerWithRefId/>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
          <FetchData/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;