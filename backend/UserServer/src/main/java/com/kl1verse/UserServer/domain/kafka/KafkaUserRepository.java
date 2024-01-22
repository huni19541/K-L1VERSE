package com.kl1verse.UserServer.domain.kafka;

import com.kl1verse.UserServer.domain.user.repository.entity.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface KafkaUserRepository extends JpaRepository<User, Integer> {
    @Query(value = "UPDATE user SET goal = :goal WHERE user_id = :id", nativeQuery = true)
    void updateGoal(@Param("id") Integer id,@Param("goal") int goal);
}
