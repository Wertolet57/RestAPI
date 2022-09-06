package ru.kata.spring.boot_security.demo.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ru.kata.spring.boot_security.demo.dao.UserDao;
import ru.kata.spring.boot_security.demo.models.User;

import java.util.List;

@Service
public class UserServiceImpl implements UserService, UserDetailsService {
    private UserDao userDao;
    @Autowired
    public UserServiceImpl(UserDao userDAO) {
        this.userDao = userDAO;
    }
    @Override
    public List<User> getUsers() {
        return userDao.getUsers();
    }
    @Override
    public User getUser(Long id) {
        return userDao.getUser(id);
    }
    @Override
    public void saveUser(User user) {
        userDao.saveUser(user);
    }
    @Override
    public void updateUser(User user) {
        userDao.updateUser(user);
    }
    @Override
    public void deleteUser(Long id) {
        userDao.deleteUser(id);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userDao.findByUsername(username);
    }
}
