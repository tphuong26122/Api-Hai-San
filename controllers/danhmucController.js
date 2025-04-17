const db = require('../config/db');

// API lấy danh sách danh mục
exports.getAllCategories = (req, res) => {
    db.query('SELECT * FROM DanhMuc', (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching categories' });
        }
        res.status(200).json(results);
    });
};

// API thêm danh mục mới
exports.createCategory = (req, res) => {
    const { ten_danh_muc } = req.body;
    db.query(
        'INSERT INTO DanhMuc (ten_danh_muc) VALUES (?)',
        [ten_danh_muc],
        (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error creating category' });
            }
            res.status(201).json({ message: 'Category created successfully' });
        }
    );
};
// Cập nhật danh mục
exports.updateCategory = (req, res) => {
    const { id } = req.params;
    const { ten_danh_muc } = req.body;
    db.query(
        'UPDATE DanhMuc SET ten_danh_muc = ? WHERE id = ?',
        [ten_danh_muc, id],
        (err) => {
            if (err) return res.status(500).json({ message: 'Error updating category' });
            res.status(200).json({ message: 'Category updated successfully' });
        }
    );
};

// Xoá danh mục
exports.deleteCategory = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM DanhMuc WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json({ message: 'Error deleting category' });
        res.status(200).json({ message: 'Category deleted successfully' });
    });
};

