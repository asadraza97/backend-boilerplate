import { getAggregate, getAllPopulated } from "../db/index.js"

// const getData = (req,res)=> {
//     return getAllPopulated("category")
// }

const getData = (query)=> {
    // console.log("query====>", query);
    // const {title} = query;
    const {pageSize, pageNumber} =query
    const skip = (pageNumber -1) * pageSize
    return getAggregate([
        // {
        //     $match : {
        //         title: {
        //             $in: ["shirt", "T-shirt"]
                    
        //         }
        //     }
        // },
        // {$skip: Number(skip)},
        // {$limit: Number(pageSize)},

          // {$skip: Number(skip)},
        // {$limit: Number(pageSize)},
        // {
        //     $group: {
        //         _id: null,
        //         total: {$sum: 1}
        //     }
        // }
        {
            $facet: {
                "data": [
                    {$skip: Number(skip)},
                    {$limit: Number(pageSize)},
                ],
                "metaData": [
                    { $count: "total"}
                ]
            }
        }

])
}
export default getData