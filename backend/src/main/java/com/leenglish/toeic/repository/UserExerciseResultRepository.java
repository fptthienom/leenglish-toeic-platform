package com.leenglish.toeic.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.leenglish.toeic.domain.UserExerciseResult;

@Repository
public interface UserExerciseResultRepository extends JpaRepository<UserExerciseResult, Long> {

    List<UserExerciseResult> findByUserIdAndExerciseId(Long userId, Long exerciseId);

    List<UserExerciseResult> findByExerciseId(Long exerciseId);

    List<UserExerciseResult> findByUserId(Long userId);
}
