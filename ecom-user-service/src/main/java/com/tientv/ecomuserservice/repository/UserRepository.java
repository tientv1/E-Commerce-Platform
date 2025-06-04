package com.tientv.ecomuserservice.repository;

import com.tientv.ecomuserservice.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.*;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByFirebaseId(UUID firebaseId);
}
