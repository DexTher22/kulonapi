import { Router } from "express";
const router = Router()


router.get('/products', (req, res) => {
    res.json({msg: 'termékek GET'})
})
router.post('/products', (req, res) => {
    res.json({msg: 'termékek POST'})
})
router.put('/products', (req, res) => {
    res.json({msg: 'termékek PUT'})
})
router.patch('/products', (req, res) => {
    res.json({msg: 'termékek PATCH'})
})
router.delete('/products', (req, res) => {
    res.json({msg: 'termékek DELETE'})
})
router.get('/employees', (req, res) => {
    res.send('Itt lesznek a dolgozók')
})

export default router