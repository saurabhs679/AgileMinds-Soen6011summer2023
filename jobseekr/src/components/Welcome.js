import React from "react";
import { Grid, Typography } from "@material-ui/core";
// import video from './video.mp4';

const Welcome = (props) => {
  return (
    <Grid container item direction="column" alignItems="center" justify="center">
      
      {/* <video className='videoTag' autoPlay loop muted 
        style={{minWidth: "100%",minHeight: "100vh",maxWidth: "100%",maxHeight: "100vh",objectFit: "cover",
          zIndex: "-1", boxSizing:"border-box",backgroundColor: "rgba(35,45,57,0.8)"}}>
          <source src={video} type='video/mp4' />
      </video> */}
        <div class="caption header-text"
          style={{ position: "absolute",top: "0",left: "0", bottom: "7px",width: "100%"
            }}>

              <div style={{textAlign: "center",position: "absolute",width: "80%",left: "50%",top: "50%",
                            transform: "translate(-50%,-50%)",background:"rgba(255,255,255,0.5)"}}>
                <Grid item >
                  <Typography variant="h3" style={{marginTop: "10px",fontSize: "18px",
                      textTransform: "uppercase",fontWeight: "800",color: "#6f03fc",
                      letterSpacing: "0.5px"}}>FACING DIFFICULTIES IN FINDING SUITABLE JOB </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h4" 
                  style={{marginTop: "30px",marginBottom:"25px",textTransform: "uppercase",
                  fontWeight: "500",color: "#6f03fc",letterSpacing: "1px"}}>
                    Unlock Your Potential, <em style={{fontStyle: "normal",color: "#000000",fontWeight: "500"}}>Discover Endless Opportunities</em>
                  </Typography>
                </Grid>
              </div>
              
        </div>
    
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
