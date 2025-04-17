const db = require('../config/db');

// API lấy danh sách sản phẩm
exports.getAllProducts = (req, res) => {
    db.query('SELECT * FROM SanPham', (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching products' });
        }
        res.status(200).json(results);
    });
};

// API thêm sản phẩm mới
exports.createProduct = (req, res) => {
    const { ten_san_pham, mo_ta, gia, so_luong_kho, id_danh_muc, hinh_anh } = req.body;
    db.query(
        'INSERT INTO SanPham (ten_san_pham, mo_ta, gia, so_luong_kho, id_danh_muc, hinh_anh) VALUES (?, ?, ?, ?, ?, ?)',
        [ten_san_pham, mo_ta, gia, so_luong_kho, id_danh_muc, hinh_anh],
        (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error creating product' });
            }
            res.status(201).json({ message: 'Product created successfully' });
        }
    );
};
// Cập nhật sản phẩm
exports.updateProduct = (req, res) => {
    const { id } = req.params;
    const { ten_san_pham, mo_ta, gia, so_luong_kho, id_danh_muc, hinh_anh } = req.body;
    db.query(
        'UPDATE SanPham SET ten_san_pham = ?, mo_ta = ?, gia = ?, so_luong_kho = ?, id_danh_muc = ?, hinh_anh = ? WHERE id = ?',
        [ten_san_pham, mo_ta, gia, so_luong_kho, id_danh_muc, hinh_anh, id],
        (err) => {
            if (err) return res.status(500).json({ message: 'Error updating product' });
            res.status(200).json({ message: 'Product updated successfully' });
        }
    );
};

// Xoá sản phẩm
exports.deleteProduct = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM SanPham WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json({ message: 'Error deleting product' });
        res.status(200).json({ message: 'Product deleted successfully' });
    });
};
