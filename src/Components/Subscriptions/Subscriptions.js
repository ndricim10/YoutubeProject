import React, { useEffect } from "react";
import "./Subscriptions.scss";
import "../../index.scss";
import { Row, Col } from "react-bootstrap";
import numeral from "numeral";
import {useDispatch, useSelector} from 'react-redux'
import { getMyChannels } from "../../Redux/Actions/videosAction";
import ReactLoading from "react-loading";

export default function Subscriptions() {

  const clientId = "827871983619-k27hkmbdtriftbsnrv749fnk87vpvnc8.apps.googleusercontent.com"

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getMyChannels())
  }, [dispatch])

  const {loading} = useSelector(state=>state.myChannels)

  return (
    <>
      {
        loading ? <div className="loader">
        <ReactLoading type="bars" height={200} width={175} />
      </div> : (
          <Row className="subscriptions">
        <Col sm={4} className="image">
          <img src="https://yt3.ggpht.com/ZjcQii3sVKaPcGK3rIm8vot-qwdmm7KAHsWCjlQLsDLa_tm2kykM-Lgmty1IwQWehj7nEzXPUA=s176-c-k-c0x00ffffff-no-rj" />
        </Col>
        <Col sm={8} className="subscriptions_details">
          <h3>Metallica</h3>
          <span className="subscriptions_details_description">
            some Description
          </span>
          <div className="total">
            <span>{numeral(235).format('0.a')} videos</span>
            <span>{numeral(2357777645432).format('0.a')} views</span>
          </div>
        </Col>
      </Row>
        )
      }
    </>
  );
}
