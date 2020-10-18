import { Router, Request, Response } from 'express'
import { ResponseData } from '../../responseData'

const routerV1 = Router()

// @desc Parse input data and send response
// @route POST /parse
routerV1.post('/parse', (req: Request, res: Response) => {
    let data: string = req.body.data
    let dataArr: string[] = data.split('000')
    let resData: ResponseData = {
        firstName: dataArr[0] + '0000',
        lastName: dataArr[1].replace('0', '') + '000',
        clientId: dataArr[2]
    }
    res.send(JSON.stringify({
        statusCode: 200,
        data: resData
    }))
})

export { routerV1 }
