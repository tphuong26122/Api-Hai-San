const db = require('../config/db');

// API lấy danh sách người dùng
exports.getAllUsers = (req, res) => {
    db.query('SELECT * FROM NguoiDung', (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching users' });
        }
        res.status(200).json(results);
    });
};

// API đăng ký người dùng mới
exports.registerUser = (req, res) => {
    const { ten_dang_nhap, mat_khau, ho_ten, email, so_dien_thoai, dia_chi, vai_tro } = req.body;
    db.query(
        'INSERT INTO NguoiDung (ten_dang_nhap, mat_khau, ho_ten, email, so_dien_thoai, dia_chi, vai_tro) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [ten_dang_nhap, mat_khau, ho_ten, email, so_dien_thoai, dia_chi, vai_tro || 'khach_hang'],
        (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error registering user' });
            }
            res.status(201).json({ message: 'User registered successfully' });
        }
    );
};

// API đăng nhập
exports.loginUser = (req, res) => {
    const { ten_dang_nhap, mat_khau } = req.body;
    db.query(
        'SELECT * FROM NguoiDung WHERE ten_dang_nhap = ? AND mat_khau = ?',
        [ten_dang_nhap, mat_khau],
        (err, results) => {
            if (err) {
                return res.status(500).json({ message: 'Error logging in' });
            }
            if (results.length > 0) {
                res.status(200).json({ message: 'Login successful', user: results[0] });
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        }
    );
};
// Cập nhật người dùng
exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { ten_dang_nhap, mat_khau, ho_ten, email, so_dien_thoai, dia_chi, vai_tro } = req.body;
    db.query(
        'UPDATE NguoiDung SET ten_dang_nhap = ?, mat_khau = ?, ho_ten = ?, email = ?, so_dien_thoai = ?, dia_chi = ?, vai_tro = ? WHERE id = ?',
        [ten_dang_nhap, mat_khau, ho_ten, email, so_dien_thoai, dia_chi, vai_tro, id],
        (err) => {
            if (err) return res.status(500).json({ message: 'Error updating user' });
            res.status(200).json({ message: 'User updated successfully' });
        }
    );
};

// Xoá người dùng
exports.deleteUser = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM NguoiDung WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json({ message: 'Error deleting user' });
        res.status(200).json({ message: 'User deleted successfully' });
    });
};
