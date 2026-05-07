const ProductController = {
    index(req, res) {
        res.status(200)
        res.json({msg: 'Ez már a kontrollerből fut'})
    },
    store(req, res) {
        if(!req.body.name) {
            res.status(400)
            res.json({
                success: false,
                message: 'Bad request'
            })
        }
        res.json({msg: 'Üdv: ' + req.body.name})
    },
    update(req, res) {
        if (!req.params.id || !req.body.name) {
            res.status(400)
            res.json({
                success: true,
                message: 'Rossz kérés'
            })
        }
        res.status(201)
        res.json({
            succes: true,
            message: 'Siker'
        })

    },
    
    delete(req, res) {
        if(!req.params.id) {
            res.status(400)
            res.json({
                success: false,
                message: 'kötelező id'
            })
        }
        res.status(200)
        res.json({
            success: true, 
            message: 'Törlés: ' + req.params.id })
    }
}

export default ProductController