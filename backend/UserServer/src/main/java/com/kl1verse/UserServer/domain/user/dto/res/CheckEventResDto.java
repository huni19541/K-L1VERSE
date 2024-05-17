package com.kl1verse.UserServer.domain.user.dto.res;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CheckEventResDto {
    String name;
    String description;
    String start_date;
    String end_date;
}