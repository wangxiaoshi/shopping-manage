package com.huihong.alpha.service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.huihong.alpha.dao.UserDao;
import com.huihong.alpha.dao.UserRoleDao;
import com.huihong.alpha.model.User;
import com.huihong.alpha.model.UserRole;
import com.huihong.alpha.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired(required = false)
    private UserDao userDao;
    @Autowired(required = false)
    private UserRoleDao userRoleDao;
    @Autowired
    private PasswordEncoder passwordEncoder;

    /**
     * @Description: 创建一个新用户
     * @param user  前端传来的用户对象
     * @return
     */

    public long createUser(User user) {
        //将用户密码加密
        user.setUserPassword(passwordEncoder.encode(user.getUserPassword()));
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
        return userDao.getUser(userID);
    }

    /**
     * @Description: 修改指定用户
     * @param user
     */
    public void updateUser(User user) {
//        System.out.println("service收到用户名: " + user.getUserName());
        userDao.updateUser(user);
    }

    /**
     * @Description: 删除指定用户
     * @param userID
     */
    public void deleteUser(Long userID) {
        userDao.deleteUser(userID);
    }

    /**
     * @Description: 通过关键字搜索并返回带指定用户的分页
     * @param keywordStr
     * @return
     */
    public List<User> getUserBy(String keywordStr, Page<User> page) {
        Long keywordLong = null;
        try {
            keywordLong = Long.valueOf(keywordStr);
        } catch (NumberFormatException e) {
            System.out.println("转换关键词格式错误!");
            e.printStackTrace();
            keywordLong = null;
        }
        PageHelper.startPage(page.getIndex(), page.getCount());

        List<User> list = userDao.getUserBy(keywordStr, keywordLong);

        page.setList(list);
        page.setTotalRecord(new PageInfo<User>(list).getTotal());
        return page.getList();
    }

}
