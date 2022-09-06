package ru.kata.spring.boot_security.demo.dao;


import org.springframework.stereotype.Repository;
import ru.kata.spring.boot_security.demo.models.User;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public class UserDaoImpl implements UserDao{
    @PersistenceContext()
    private EntityManager entityManager;
    @Override
    public List<User> getUsers() {
        return entityManager.createQuery("from User", User.class).getResultList();
    }
    @Override
    public User getUser(Long id) {
        return entityManager.find(User.class, id);
    }
    @Override
    public void saveUser(User user) {
        entityManager.persist(user);
        entityManager.flush();
    }
    @Override
    public void updateUser(User user) {
        entityManager.merge(user);
        entityManager.flush();
    }
    @Override
    public void deleteUser(Long id) {
        entityManager.remove(getUser(id));
        entityManager.flush();
    }

    @Override
    public User findByUsername(String email) {
        return (User)entityManager.createQuery("from User u where u.email = :email")
                .setParameter("email", email).getResultList().get(0);
    }

}
