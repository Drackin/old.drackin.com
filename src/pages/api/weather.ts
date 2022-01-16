import type { NextApiRequest, NextApiResponse } from "next";
import weatherjs from "weather-js";
import Cors from "cors";

const cors = Cors({
    methods: ['GET', 'HEAD'],
})
  
  // Helper method to wait for a middleware to execute before continuing
  // And to throw an error when an error happens in a middleware
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function) {
    return new Promise((resolve, reject) => {
      fn(req, res, (result: any) => {
        if (result instanceof Error) {
          return reject(result)
        }
  
        return resolve(result)
      })
    })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await runMiddleware(req, res, cors);
    const { city, degree } = req.query;

    if(!city) {
        return res.status(400).json({ code: 400, message: "City Parameter is Not Specified" })
    }

    let degreeType = degree === "celcius" ? "C" : "F";

    if(degree) {
        switch(degree) {
            case "celcius":
                degreeType = "C";
                break;
            case "fahrenheit":
                degreeType = "F";
                break;
            default:
                res.status(400).json({ code: 400, message: "Degree Parameter Must be 'celcius' or 'fahrenheit'" })
                break;
        }
    }

    weatherjs.find({ search: city, degreeType }, function(err: any, result: any) {
        if(err) return res.status(500).json({ code: 500, message: err });

        res.status(200).json(result);
    });
};