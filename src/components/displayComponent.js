import { Button, Container } from "react-bootstrap";

export default function DisplayComponent(props) {
  return (
    <div className="display">
      <div className="box">{props.time.h > 0 ? props.time.h : "00"}</div>
      <span>:</span>
      <div className="box">{props.time.m > 0 ? props.time.m : "00"}</div>
      <span>:</span>
      <div className="box">{props.time.s > 0 ? props.time.s : "00"}</div>
      <span>:</span>
      <div className="box">{props.time.ms > 0 ? props.time.ms : "00"}</div>
    </div>
  );
}
