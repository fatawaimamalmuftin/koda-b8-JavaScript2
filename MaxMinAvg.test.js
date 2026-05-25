import {describe, it} from "node:test";
import assert from "node:assert/strict";
import {Acumulator} from "./MaxMinAvg.js";

describe('Acumulator Proses', ()=>{
    it("harus error apabila input kosong", ()=>{
        assert.throws(()=>{
            Acumulator([]), {
            message:'harus angka boss, dan di isii jangann engga!!'
        }});

    it('harus eror apa bila input string', ()=>{
        assert.throws(()=> 
            Acumulator("a"),{
            message:'harus angka boss, dan di isii jangann engga!!'
        })
    });
    
    });
    it("harus menghasilkan Max", () => {
        const hasil = Acumulator([5, 4, 3, 2, 1, 6, 7, 10, 8, 9])
        assert.equal(hasil.max, 10);
    });

    it("harus menghasilkan Min", () => {
        const hasil = Acumulator([5, 4, 3, 2, 1, 6, 7, 10, 8, 9])
        assert.equal(hasil.min, 1);
    });

    it("harus menghasilkan Avg", () => {
        const hasil = Acumulator([5, 4, 3, 2, 1, 6, 7, 10, 8, 9])
        assert.equal(hasil.avg, 5.5);
    });
    // it('', ()=>{})
})