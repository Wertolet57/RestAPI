package ru.kata.spring.boot_security.demo.dao;

import ru.kata.spring.boot_security.demo.models.User;

import java.util.List;
import java.util.Optional;

public interface UserDao {
    List<User> getUsers();
    User getUser(Long id);
    void saveUser(User user);
    void updateUser(User user);
    void deleteUser(Long id);
    User findByUsername(String username);
}
