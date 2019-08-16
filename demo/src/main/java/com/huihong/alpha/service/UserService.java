package com.huihong.alpha.service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.huihong.alpha.PasswordHash;
import com.huihong.alpha.dao.UserDao;
import com.huihong.alpha.model.User;
import com.huihong.alpha.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserDao userDao;

    private PasswordHash passwordHash;

    /**
     * @Description: 创建一个新用户
     * @param user  前端传来的用户对象
     * @return
     */
    public long createUser(User user) {
        //将用户密码使用PBKDF2加密
        try {
            user.setUserPassword(passwordHash.createHash(user.getUserPassword()));
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (InvalidKeySpecException e) {
            e.printStackTrace();
        }
        return userDao.createUser(user);
    }

    /**
     * @Description: 以分页形式获取所有用户
     * @param page 分页相关信息
     * @return  分好页的用户列表
     */
    public List<User> getAllUser(Page<User> page) {
        PageHelper.startPage(page.getIndex(), page.getCount());
        List<User> list = userDao.getAllUser();
//        for (int i = 0; i<list.size(); i++){
//            System.out.println(list.get(i).getUserRegTime());
//        }
        page.setList(list);
        page.setTotalRecord(new PageInfo<User>(list).getTotal());
        return page.getList();
    }

    /**
     * @Description: 获取指定用户
     * @param userID 需要获取的用户
     * @return 该用户信息
     */
    public User getUser(Long userID) {
        User res = userDao.getUser(userID);
        System.out.println(res.toString());
        return res;
    }
}
