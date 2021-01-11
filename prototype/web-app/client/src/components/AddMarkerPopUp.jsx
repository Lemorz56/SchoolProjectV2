import React from "react";
import { Marker, Popup } from 'react-map-gl';
import DeviceForm from "../DeviceForm";

const AddMarkerPopUP = (props) => {
    return (<div>
      {
        // IF addMarkerLocation(true) then show popup otherwise show nothing
        props.addMarkerLocation ? (
          <>
            <Marker
              latitude={props.addMarkerLocation.latitude}
              longitude={props.addMarkerLocation.longitude}
              title={props.addMarkerLocation.title}
            >
              <div>
                <svg 
                  className="marker red"
                  style={{
                  // we set the size according to the zoom level
                  height: 6 * `${props.viewport.zoom}`,
                  width: 6 * `${props.viewport.zoom}`,
                  }}
                  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
                  <g>
                    <g>
                      <path d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035
                      c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719
                      c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"/>
                    </g>
                  </g>
                </svg>
              </div>
            </Marker>
              <Popup
                // this is the popup component
                latitude={props.addMarkerLocation.latitude}
                longitude={props.addMarkerLocation.longitude}
                closeButton={true}
                closeOnClick={false}
                dynamicPosition={true}
                onClose={() => props.setAddMarkerLocation(null)}
                anchor="top"
              >
                <div className="popup">
                  <DeviceForm onClose={() => {
                    // once we close the add popup we close the modal
                    // and we refresh the list of devices
                    props.setAddMarkerLocation(null);
                    props.getDevices();
                  }} location={props.addMarkerLocation} />
                </div>
              </Popup>
          </>
            ) : null
          }
    </div>);
}

export default AddMarkerPopUP;
