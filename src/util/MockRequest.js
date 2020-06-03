const payload = {
  "date": "2020-06-02",
  "explanation": "Humanity is under attack. The attack is not from large tentacle-flailing aliens, but from invaders so small they can barely be seen, and so strange they are not even clearly alive.  All over planet Earth, the human home world, DNA-based humans are being invaded by the RNA-based SARS-CoV2.  The virus, which creates a disease known as  COVID-19, specializes in reprogramming human cells into zombies that manufacture and release copies of itself.   Pictured here is a high magnification image of a human cell covered by attacking novel coronavirus SARS-CoV2 (orange).  Epic battles where two species square off in a fight to the death are not unusual on Earth, with several just involving humans typically ongoing at any time.  Even so, most humans are predicted to survive. After several years, humanity expects to win this war -- but only after millions of humans have died and trillions of coronaviruses have been destroyed.   Wash your hands: Tips for humans on how to survive this SARS-CoV2 assault",
  "hdurl": "https://apod.nasa.gov/apod/image/2006/SarsCov2_Niaid_4096.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "Novel Coronavirus Attacks Humanity",
  "url": "https://apod.nasa.gov/apod/image/2006/SarsCov2_Niaid_960.jpg"
}

function MockRequest (success, timeOut=10000){
  // create and return a promise that will be used to mock a request
  return new Promise((resolve, reject) => {
    //use a set time out to make the client wait before we resolve
    setTimeout(() => {
      if (success) {
        resolve(payload);
      } else {
        reject({ message: "Unable to get the data" })
      }
    }, timeOut)
  })
}

module.exports = MockRequest;